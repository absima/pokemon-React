import { Container, Row, Col } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default function Welcome() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <div
            style={{
              width: '100%',
            }}
          >
            <h2>Welcome to Pokéstuff</h2>
            <img
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
              }}
              src="https://raw.githubusercontent.com/absimath/pokestuff/main/pokemon.jpeg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

//   return (
//     // <main  style={{ padding: "1rem 0" }}>
//     <div
//       style={{
//         // backgroundColor: "green",
//         padding: "1rem",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//         }}
//       >
//         <h2>Welcome to Pokéstuff</h2>
//         <img src="https://raw.githubusercontent.com/absimath/pokestuff/main/pokemon.jpeg" alt="" />
//       </div>
//     </div>

//     // </main>
//   );
// }
