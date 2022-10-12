import { ref } from 'vue'

export function useFetch(url) {
  const datas = ref(null)
  const error = ref(null)

  return fetch(url)
    .then((res) => res.json())
    .then((json) => (datas.value = json))
    .catch((err) => (error.value = err));
}
