const cep = {
  mask(value: string): string {
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    return value
  },
  unmask(value: string): string {
    value = value.replace(/\D/g, '')
    return value
  }
}

export default cep

