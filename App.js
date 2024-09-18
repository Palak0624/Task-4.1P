import React from 'react';
import { Card, Image, Button, Checkbox, Form } from 'semantic-ui-react';
import './App.css'; // Import the CSS file

// Navbar component
const Navbar = () => (
  <div className="topnav">
    <a href="#home">Dev@Deakin</a>
    <input type="text" placeholder="Search" />
    <a href="#post">Post</a>
    <a href="#contact">Login</a>
  </div>
);

// Wallpaper component
const Wallpaper = () => (
  <div>
    <img
      src={require('./images/deakinuniversity.png')}
      alt="burwood"
      height={500}
      width={1550}
    />
  </div>
);

// Dummy article data
const articles = [
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    Name: 'Article One',
    Description: 'React OR Vue',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
    Name: 'Article Two',
    Description: 'NodeJS',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    Name: 'Article Three',
    Description: 'React Hooks',
  },
];

// Dummy author data
const authors = [
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    Name: 'Matthew Wade',
    Date: '27 April 1999',
    Description:
      'Matther is from the stream of computer engineering and is outstanding in hardware',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
    Name: 'Grant Elliot',
    Date: '20 October 1987',
    Description:
      'Elliot is from the stream of computer engineering and has designed various websites',
  },
  {
    Image: 'https://react.semantic-ui.com/images/avatar/large/daniel.jpg',
    Name: 'Daniel James',
    Date: '21 August 1980',
    Description:
      'Daniel is from the stream of computer engineering and has the ability to solve most of the complex algorithms',
  },
];

// CardItem component for displaying each article card
const ArticleCard = (props) => (
  <div className="column">
    <Card>
      <Image src={props.Image} height={250} width={250} />
      <Card.Content>
        <Card.Header>{props.Name}</Card.Header>
        <Card.Description>{props.Description}</Card.Description>
        <Card.Meta>
          <span className="star">⭐⭐</span>
          <span className="author">{props.Author}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

// CardItem component for displaying each author card
const AuthorCard = (props) => (
  <div className="column">
    <Card>
      <Image src={props.Image} height={250} width={250} />
      <Card.Content>
        <Card.Header>{props.Name}</Card.Header>
        <Card.Description>{props.Description}</Card.Description>
        <Card.Meta>
          <span className="date">{props.Date}</span>
          <span className="star">⭐⭐⭐</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  </div>
);

// Newsletter form component
const Newsletter = () => (
  <Form className="form">
    <Form.Field>
      <label>E-mail</label>
      <input placeholder="e-mail" />
    </Form.Field>
    <Form.Field>
      <label>Full Name</label>
      <input placeholder="full name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to signup for daily insider" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

// Last component (renamed)
const Last = () => (
  <div>
    <img
      src={require('./images/last.png')}
      alt="burwood"
      height={500}
      width={1550}
    />
  </div>
);

// Main App component
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Wallpaper */}
      <Wallpaper />

      {/* Featured Articles heading */}
      <h2 className="heading">Featured Articles</h2>

      {/* First row of article cards */}
      <div className="row">
        {articles.slice(0, 3).map((article, index) => (
          <ArticleCard
            key={index}
            Image={article.Image}
            Name={article.Name}
            Description={article.Description}
          />
        ))}
      </div>

      {/* View More Articles button */}
      <div className="row">
        <Button content="View More Articles" onClick={() => { /* Handle click event */ }} />
      </div>

      {/* Featured Tutorials heading */}
      <h2 className="heading">Featured Tutorials</h2>

      {/* Second row of author cards */}
      <div className="row">
        {authors.slice(0, 3).map((author, index) => (
          <AuthorCard
            key={index}
            Image={author.Image}
            Name={author.Name}
            Date={author.Date}
            Description={author.Description}
          />
        ))}
      </div>

      {/* View All Authors button */}
      <div className="row">
        <Button content="View All Authors" onClick={() => { /* Handle click event */ }} />
      </div>

      {/* Newsletter signup */}
      <div className="row">
        <Newsletter />
      </div>

      {/* Last image */}
      <Last />
    </div>
  );
}

export default App;
