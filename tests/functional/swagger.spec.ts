import { test } from '@japa/runner'

test.group('Swagger', () => {
  test('swagger ui should be displayed', async ({ client }) => {
    const response = await client.get('/swagger/docs')

    response.assertStatus(200)
  })

  test('swagger yaml should be displayed', async ({ client }) => {
    const response = await client.get('/swagger/swagger.yaml')

    response.assertStatus(200)
  })
})
