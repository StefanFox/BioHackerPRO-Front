import {Ability} from '@casl/ability'
import {initialAbility} from './config'

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const userData = localStorage.getItem('userData')

function temp(userData) {
  if (userData && userData.is_active) {
    return [
      {
        action: 'manage',
        subject: 'all',
      },
    ]
  }
  return {}
}

const existingAbility = userData ? temp(userData) : null

export default new Ability(existingAbility || initialAbility)
