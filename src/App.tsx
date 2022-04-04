import * as C from './App.styles';

import { RegisterProducts } from './components/RegisterProducts';
import { AreaProducts } from './components/AreaProducts';

const App = () => {
  return (
    <C.Container>

      {/* FormRegister --sidebar */}
      <C.Col>
        <RegisterProducts />
      </C.Col>

      {/* Area */}

        {/** Header */}
        <C.Col>
          <AreaProducts />
        </C.Col>
      
    </C.Container>
  )
}

export default App;