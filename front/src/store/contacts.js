import { randFullName, randPhoneNumber, randRecentDate } from '@ngneat/falso'
import { groupBy1stLetter } from '@/filters/groupBy1stLetter'
import { groupByTimeAgo } from '@/filters/groupByTimeAgo'

const contacts ={
  namespace: true,
  state: () => ({
    contacts: [
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()},
      {name:randFullName(),phone:randPhoneNumber(),createDate:randRecentDate()}]
  }),
  getters: {
    items: state => state.contacts,
    groupBy1stLetter: state=> groupBy1stLetter(state.contacts),
    groupByTimeAgo:state => groupByTimeAgo(state.contacts)
  },

}

export default contacts;