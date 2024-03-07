
const ComplexDashBoard = ({
    children,
    notifications,
    users,
    login
}) => {
    const isloggedin = false
  return (
    isloggedin ? (
        <div>
      {children}
    <div>
    <div >
        {notifications}
      </div>
      <div>
        {users}
      </div>
    </div>
    </div>
    ):(
        login
    )
    
  )
}

export default ComplexDashBoard
