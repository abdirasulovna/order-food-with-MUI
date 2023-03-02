import { useCallback, useState } from "react";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import  Snackbar  from "./components/UI/Snackbar";
import { uiActions } from "./store/ui/uiSlice";

function AppContent() {
  const dispatch = useDispatch();
  const [isBasketVisible, setBasketVisible] = useState(false);

  const snackbar = useSelector((state) => state.ui.snackbar);

  const showBasketHnadler = useCallback(() => {
    setBasketVisible((prevState) => !prevState);
  }, []);
  return (
    <Provider store={store}>
      <Header onShowBasket={showBasketHnadler} />

      <Summary />

      <Meals />
      {isBasketVisible && (
        <Basket open={isBasketVisible} onClose={showBasketHnadler} />
      )}
      <Snackbar
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => {
          dispatch(uiActions.closeSnackbar());
        }}
      />
    </Provider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;

// const Content = styled.div`
//   margin-top: 101px;
// `;

// GET /foods
// Headers: { UserID: "your_name"  }

// GET /basket
// Headers: { UserID: "your_name"  }

// POST /foods/:foodId/addToBasket
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }

// PUT /basketItem/:id/update
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }
