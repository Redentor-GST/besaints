import * as utils from '../utils/utils'

describe('dates', () => {
    it('should create a valid date trigger', () => {
        const date = '07-15'
        const hourTrigger = 12
        const minuteTrigger = 0
        const dateTrigger = utils.createDateTrigger(
            date,
            hourTrigger,
            minuteTrigger,
        )
        const year = new Date().getFullYear()
        const expected = new Date(year, 6, 15, 12, 0, 0)
        expect(dateTrigger).toEqual(expected)
    })

    it('should parse date correctly', () => {
        expect(utils.parseStrDate('07-15')).toEqual([7, 15])
    })

    it('should translate date correctly', () => {
        const today = new Date(2020, 1, 1)
        expect(utils.getDateStr(today, true)).toEqual('02-01')
        expect(utils.getDateStr(today, false)).toEqual('01-01')
    })

    it('should compare actual date correctly', () => {
        const today = new Date()
        let month: any = today.getMonth() + 1
        let day: any = today.getDate()
        if (day < 10) day = `0${day}`
        if (month < 10) month = `0${month}`
        expect(utils.compareTodayvsDate(`${month}-${day}`)).toBe(true)
    })
})
