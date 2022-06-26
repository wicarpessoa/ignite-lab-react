import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo";

import { Router } from "../Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

//query- metodo padrao sem ser CMS

//useEffect(() => {
//client
//.query({
//      query: GET_LESSONS_QUERY,
//    })
//    .then((response) => {
//      console.log(response.data);
//    });
//}, []);

//const GET_LESSONS_QUERY = gql`
//  query {
//    lessons {
//      id
//      title
//    }
//  }
//`;
//
//interface Lesson {
//  id: string;
//  title: string;
//}
