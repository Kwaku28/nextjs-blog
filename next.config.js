const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_UN: 'kwaku28',
        MONGODB_PW: 'Hrjn7xihWLT8AdPw',
        MONGODB_CL: 'cluster0',
        MONGODB_DB: 'nextjs-blog-dev',
        MONGODB_APP: 'Cluster0',
      },
    }
  }

  return {
    env: {
      MONGODB_UN: 'kwaku28',
      MONGODB_PW: 'Hrjn7xihWLT8AdPw',
      MONGODB_CL: 'cluster0',
      MONGODB_DB: 'nextjs-blog',
      MONGODB_APP: 'Cluster0',
    },
  }
  
}
