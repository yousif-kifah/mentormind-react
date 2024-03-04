export default function HomeCard(props) {
  return (
    <div style={styling.column}>
      <div style={styling.box}>
        {props.content}
        {/* Using industry leading level of secure and encryption data measures. */}
      </div>
    </div>
  )
}

const styling = {
  column: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "normal",
    maxWidth: "25%",
    backgroundColor: "#d9d9d9",
  },
  box: {
    lineHeight: "normal",
    // verticalAlign: "middle",
    // horizontalAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // flexGrow: 1,
    // marginTop: "40px",
    fontSize: "24px",
    fontWeight: 400,
    padding: "25px 60px",
    color: "#3f826d",
  },
}
