import axios from 'axios'

export default axios.create({
  baseURL: 'https://pacific-lowlands-22955.herokuapp.com',
  headers: { token: '26d1ebd4ec8c55cc69f190d0d37f6dac' }
})
