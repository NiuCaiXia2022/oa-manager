// 本地封装

// 存
const setItem = (key, value) => {
  if (typeof value === 'object') {
    return localStorage.setItem(key, JSON.stringify(value))
  }
  return localStorage.setItem(key, value)
}

// 取
const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删
const removeItem = (key) => {
  localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
