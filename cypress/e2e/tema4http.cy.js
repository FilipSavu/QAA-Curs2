describe('API Testing with httpbin', () => {

    // 1. Test GET request
    it('should return a 200 response for GET request', () => {
        cy.request('/get').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('url');
        });
    });

    // 2. Test POST request with JSON data
    it('should send JSON data via POST', () => {
        cy.request('POST', '/post', { name: 'Filip', age: 30 }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ name: 'Filip', age: 30 });
        });
    });

    // 3. Test sending custom headers
    it('should send custom headers', () => {
        cy.request({
            method: 'GET',
            url: '/get',
            headers: { 'User-Agent': 'CypressTest', 'X-Custom-Header': 'TestValue' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.headers['User-Agent']).to.include('CypressTest');
            expect(response.body.headers['X-Custom-Header']).to.eq('TestValue');
        });
    });

    // 4. Test sending query parameters
    it('should send query parameters', () => {
        cy.request({
            method: 'GET',
            url: '/get',
            qs: { search: 'cypress', limit: 5 }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args).to.deep.equal({ search: 'cypress', limit: '5' });
        });
    });

    // 5. Test sending random query parameter
    it('should send a random query parameter', () => {
        const randomKey = `param_${Math.floor(Math.random() * 1000)}`;
        const randomValue = 'randomValue';

        cy.request({
            method: 'GET',
            url: '/get',
            qs: { [randomKey]: randomValue }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.args[randomKey]).to.eq(randomValue);
        });
    });

    // 6. Test response time (max 500ms)
    it('should respond in less than 500ms', () => {
        cy.request('/get').then((response) => {
            expect(response.duration).to.be.lessThan(500);
        });
    });

    // 7. Test PUT request
    it('should send a PUT request', () => {
        cy.request('PUT', '/put', { key: 'value' }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.json).to.deep.equal({ key: 'value' });
        });
    });

    // 8. Test DELETE request
    it('should send a DELETE request', () => {
        cy.request('DELETE', '/delete').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('url');
        });
    });

    // 9. Test sending form data
    it('should send form data via POST', () => {
        cy.request({
            method: 'POST',
            url: '/post',
            form: true,
            body: { username: 'testuser', password: 'secret' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.form).to.deep.equal({ username: 'testuser', password: 'secret' });
        });
    });

    // 10. Test sending cookies
    it('should send and receive cookies', () => {
        cy.setCookie('session_id', '12345');
        cy.request('/cookies').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.cookies).to.deep.equal({ session_id: '12345' });
        });
    });

});
