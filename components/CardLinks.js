import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";

const CardLinks = () => {
  const cardInfo = [
    {
      cardName: "Calorie Tracker",
      source:
        "https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM=",
      linkTo: "/calorieTracker",
    },
    {
      cardName: "Workout Planner",
      source:
        "https://static.vecteezy.com/system/resources/thumbnails/002/029/070/small/man-holding-a-dumbbell-in-a-gym-with-row-of-dumbbells-in-the-background-free-photo.jpg",
      linkTo: "/workouts/workoutsHome",
    },
    {
      cardName: "Food Diary",
      source:
        "https://journey.cloud/content_assets/diary/diary-surrounded-by-healthy-foods.jpg",
      linkTo: "/foodDiary",
    },
    {
      cardName: "Calculator",
      source:
        "https://thumbs.dreamstime.com/b/calculator-set-healthy-food-calculator-set-healthy-food-wooden-table-110752877.jpg",
      linkTo: "/calorieCalculator",
    },
    {
      cardName: "Online Coaching",
      source:
        "https://www.shutterstock.com/image-photo/indoor-personal-cardio-training-gym-260nw-1822207589.jpg",
      linkTo: "/onlineCoaching",
    },
    {
      cardName: "User Profile",
      source:
        "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
      linkTo: "/profile",
    },
  ];

  return (
    <Grid.Container gap={3}>
      {Object.keys(cardInfo).map((key, i) => (
        <Grid key={i} sm={12} md={4}>
          <Card isPressable isHoverable css={{ mw: "330px" }}>
            <Card.Header
              css={{ position: "absolute", zIndex: 1, top: 5 }}
            ></Card.Header>
            <Card.Divider />
            <Card.Body css={{ p: 0 }}>
              <Link href={cardInfo[key].linkTo}>
                <Card.Image
                  src={cardInfo[key].source}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt={cardInfo[key].cardName}
                />
              </Link>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
              <Text b css={{ color: "black" }}>
                {cardInfo[key].cardName}
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default CardLinks;
