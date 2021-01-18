import { useQuery, gql } from "@apollo/client";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const FETCH_CHARACTERS = gql`
  {
    characters {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

function Characters() {
  const { loading, error, data } = useQuery(FETCH_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container spacing={1}>
      {data.characters.results.map((character) => (
        <Grid key={character.id} item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={character.name}
                height="250"
                image={character.image}
                title={character.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {character.species}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
      ;
    </Grid>
  );
}

export default Characters;
