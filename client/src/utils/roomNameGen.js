export const roomNameGen = (userId1, userId2) => {
  const fullId = userId1+userId2
  const roomName = fullId.split('').sort().join('')
  return roomName
}
