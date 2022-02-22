import styled from '@emotion/styled'
import mq from '../config/breakpoints'

export const LimeLink = styled.a`
  color: lime;

  ${mq[2]} {
    a {
      color: firebrick;
    }
  }

  ${mq[1]} {
    a {
      color: mediumblue;
    }
  }

  ${mq[0]} {
    a {
      color: blanchedalmond;
    }
  }
`
