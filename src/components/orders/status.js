const StatusManager = order => {
  if (order.status.accepted) {
    return 'Accepted'
  }if (order.status.rejected) {
    return 'Rejected'
  }
    return 'Pending'

}

export default StatusManager;


// {(order.status.accepted === order.status.rejected) ? (
//   'Active') : ('Accepted/Rejected')}

// className={order.status.accepted ? ('text-success') : ('text-info')}
