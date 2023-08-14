import { useQuery }   from '@apollo/client'

import { GET_NAVBAR } from './navbar.query'

export const useNavbar = () => useQuery(GET_NAVBAR)
