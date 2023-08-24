type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="d-flex align-items-center">
     {picture && (
        <img
          width="35"
          src={picture}
          className="me-2 position-relative"
          alt={name}
          style={{ "borderRadius": "50%" }}
        />
      )}
      <div>{name}</div>
    </div>
  )
}

export default Avatar
