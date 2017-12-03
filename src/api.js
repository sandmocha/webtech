import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://test-deploy-node-app.herokuapp.com/', // instance config header // api url
    headers: { 'Content-Type': 'application/json' }
  })
  
export const login = (username, password) => {  // func login 
    const data = { 
      username: username,
      password: password
    }
    return axiosInstance.post('login', data) // request post to login   data= username and password
    .then(data => data)
    .catch(error => error.response)
}

export const publishPost = (title, content) => {
    const data = { 
      title: title,
      content: content,
      user: { username: localStorage.getItem('username')}
    }
  
    return axiosInstance.post('api/post/create/', data)
      .then(data => data)
      .catch(error => error.response)
}
  
  export const getAllPosts = () => {
    return axiosInstance.get('/api/post/all/')
      .then(response => response.data)
      .catch(error => { throw(error.response) })
  }