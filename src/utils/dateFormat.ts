import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFormat(date: Date) {
  const dateFormatted = format(date, 'dd/MM/yyyy', { locale: ptBR })

  return dateFormatted
}
