import { useQuery } from '@apollo/client'

import { GET_INFO } from './info.query'

export const useInfo = () => useQuery(GET_INFO)
