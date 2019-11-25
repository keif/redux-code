import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        author={faker.name.findName()}
        content={faker.random.words()}
        timeAgo={faker.date.past().toString()}
        content={faker.random.words()}
        avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.findName()}
        content={faker.random.words()}
        timeAgo={faker.date.past().toString()}
        content={faker.random.words()}
        avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author={faker.name.findName()}
        content={faker.random.words()}
        timeAgo={faker.date.past().toString()}
        content={faker.random.words()}
        avatar={faker.image.avatar()}
        />
    </ApprovalCard>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)