import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function timeFormat(timestampString: string) {
  const timestampNumber = parseInt(timestampString, 10)

  const date = new Date(timestampNumber * 1000)

  const timeFormatted = format(date, "HH'h'mm", { locale: ptBR })

  return timeFormatted
}
