import { Card, CardBody, CardHeader, Container, Content } from "./styles";

import facebookImg from '../../assets/icon-facebook.svg';
import instagramImg from '../../assets/icon-instagram.svg';
import twitterImg from '../../assets/icon-twitter.svg';
import youtubeImg from '../../assets/icon-youtube.svg';
import iconUpImg from '../../assets/icon-up.svg';
import iconDownImg from '../../assets/icon-down.svg';
import { Facebook, Instagram, Twitter, Youtube } from "../../types";
import { useState } from "react";

export function Overview() {

  const [facebook] = useState<Facebook>({
    user: '@nathanf',
    followers: 1987,
    followersPerDay: 12,
    likes: 52,
    pageViews: 87
  });

  const [twitter] = useState<Twitter>({
    user: '@nathanf',
    followers: 1044,
    followersPerDay: 99,
    likes: 507,
    retweets: 117
  });

  const [instagram] = useState<Instagram>({
    user: '@nathanf',
    followers: 11,
    followersPerDay: 144,
    likes: 5462,
    profileViews: 52
  });

  const [youtube] = useState<Youtube>({
    user: '@nathanf',
    subscribers: 8239,
    subscribersPerDay: 144,
    likes: 107,
    totalViews: 1407
  });

  return (
    <Container>
      <h2>Overview - Today</h2>
      <Content>
        <Card>
          <CardHeader>
            <p>Page Views</p>
            <img src={facebookImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{facebook.pageViews}</h2>
            <div>
              <img src={iconUpImg} alt="followers per day" />
              <span>3%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Likes</p>
            <img src={facebookImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{facebook.likes}</h2>
            <div>
              <img src={iconDownImg} alt="followers per day" />
              <span className="down">2%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Likes</p>
            <img src={instagramImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{instagram.likes}</h2>
            <div>
              <img src={iconUpImg} alt="followers per day" />
              <span>2257%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Profile Views</p>
            <img src={instagramImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{`${instagram.profileViews}k`}</h2>
            <div>
              <img src={iconUpImg} alt="followers per day" />
              <span>1375%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Retweets</p>
            <img src={twitterImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{twitter.retweets}</h2>
            <div>
              <img src={iconUpImg} alt="followers per day" />
              <span>303%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Likes</p>
            <img src={twitterImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{twitter.likes}</h2>
            <div>
              <img src={iconUpImg} alt="followers per day" />
              <span>553%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Likes</p>
            <img src={youtubeImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{youtube.likes}</h2>
            <div>
              <img src={iconDownImg} alt="followers per day" />
              <span className="down">19%</span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <p>Total Views</p>
            <img src={youtubeImg} alt="facebook icon" />
          </CardHeader>
          <CardBody>
            <h2>{youtube.totalViews}</h2>
            <div>
              <img src={iconDownImg} alt="followers per day" />
              <span className="down">12%</span>
            </div>
          </CardBody>
        </Card>
      </Content>
    </Container>
  );
}