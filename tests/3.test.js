import { request } from '@playwright/test';
const { test, expect } = require('@playwright/test');


test('should create a feature request', async ({ request }) => {
    const response = await request.get('/api/users/12');
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(body.data.id).toBe(12);
    expect(body.data.email).toBe('rachel.howell@reqres.in');
    expect(body.data.first_name).toBe('Rachel');
    expect(body.data.last_name).toBe('Howell');
    expect(body.data.avatar).toBe('https://reqres.in/img/faces/12-image.jpg');

});

test('should create a feature request2', async ({ request }) => {
    const response = await request.get('/api/users/1234');
    const httpStatus = response.status();
    const body = await response.json();
    expect(httpStatus).toBe(404);
    expect(Object.keys(body).length === 0).toBe(true);
});