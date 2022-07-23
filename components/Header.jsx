import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers"


function Header({text, bgColor, textColor}) {

  const headerStyle={
    backgroundColor : bgColor,
    color : textColor
  }

  return (
    
      <header style={headerStyle}>
        <div className="container">
          <h2>{text}</h2>
        </div>
      </header>
    
  )
}

Header.defaultProps={
  text:'Feedback UI',
  bgColor:'black',
  textColor:'#ff6a95',
}



export default Header
