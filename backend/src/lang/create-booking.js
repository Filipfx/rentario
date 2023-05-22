import LocalizedStrings from 'react-localization'
import Env from '../config/env.config'
import * as UserService from '../services/UserService'

export const strings = new LocalizedStrings({
    fr: {
        NEW_BOOKING_HEADING: 'Nouvelle réservation'
    },
    en: {
        NEW_BOOKING_HEADING: 'New booking'
    },
    pl: {
        NEW_BOOKING_HEADING: 'Nowa rezerwacja'
    }
})

let language = UserService.getQueryLanguage()

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage()
}

strings.setLanguage(language)
