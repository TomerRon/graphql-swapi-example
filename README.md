# GraphQL SWAPI React Example

This example shows how to consume a GraphQL API from a React app. We are using [SWAPI](https://graphql.org/swapi-graphql) in this example.

## Installation

It's **highly recommended** to install the `GraphQL: Language Feature Support` extension in VS Code.

Install the dependencies:

```bash
yarn
```

Generate the types using introspection of the GraphQL API:

```bash
yarn codegen
```

Run the app:

```bash
yarn start
```

## Usage

Add a new query under `operations.graphql`:

```graphql
query getFilm($filmId: ID!) {
  film(id: $filmId) {
    id
    title
    director
  }
}
```

Generate the types again:

```bash
yarn codegen
```

You can now use the generated hook from any React component:

```tsx
import { useGetFilmQuery } from "./generated/types";

const MyComponent: React.FC = () => {
  const { data, loading } = useGetFilmQuery({
    variables: { filmId: "ZmlsbXM6MQ==" },
  });

  return ...
};
```
