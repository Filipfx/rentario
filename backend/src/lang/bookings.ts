import LocalizedStrings from 'localized-strings'
import * as langHelper from '@/common/langHelper'

const strings = new LocalizedStrings({
  fr: {
    NEW_BOOKING: 'Nouvelle réservation',
    DRESS: 'Robe',
  },
  en: {
    NEW_BOOKING: 'New Booking',
    DRESS: 'Dress',
  },
  es: {
    NEW_BOOKING: 'Nueva reserva',
    DRESS: 'Vestido',
  },
})

langHelper.setLanguage(strings)
export { strings }
