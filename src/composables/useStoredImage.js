import { ref } from 'vue'

export function useStoredImage(storageKey) {
  const imageSrc = ref(localStorage.getItem(storageKey) || '')

  function updateImage(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      imageSrc.value = reader.result
      localStorage.setItem(storageKey, reader.result)
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  return {
    imageSrc,
    updateImage
  }
}
