import { useQuery }    from '@apollo/client'

import { GET_RUNLINE } from './runline.query'

export const useRunline = () => useQuery(GET_RUNLINE)
