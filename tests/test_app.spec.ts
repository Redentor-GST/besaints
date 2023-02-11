import App from '../App'
import NotificationsUtils from '../utils/notifications'

describe('Test App Main View', () => {
  jest.mock('@react-native-async-storage/async-storage')
  it('should schedule all notifications if empty', () => {
    const mock = jest.mock('../utils/notifications', () => {
      return {
        __esModule: true,
        default: jest.fn().mockImplementation(() => {
          return {
            getAllScheduledNotifications: jest.fn().mockImplementation(() => {
              return []
            }),
            scheduleAllYearlyNotifications: jest.fn(),
          }
        }),
      }
    })
    const app = App()
    const nu = new NotificationsUtils()
    expect(nu.getAllScheduledNotifications).toHaveBeenCalledTimes(1)
  })
})
