import { Card, CardBody, CardFooter, CardHeader, Container } from "./styles";
import facebookImg from '../assets/icon-facebook.svg';
import instagramImg from '../assets/icon-instagram.svg';
import twitterImg from '../assets/icon-twitter.svg';
import youtubeImg from '../assets/icon-youtube.svg';

import iconUpImg from '../assets/icon-up.svg';
import iconDownImg from '../assets/icon-down.svg';
import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "../../types";

export function Dashboard() {
  const [facebook, setFacebook] = useState<Facebook>({
    user: '@nathanf',
    followers: 1987,
    followersPerDay: 12,
    likes: 52,
    pageViews: 87
  });

  const [twitter, setTwitter] = useState<Twitter>({
    user: '@nathanf',
    followers: 1044,
    followersPerDay: 99,
    likes: 507,
    retweets: 117
  });

  const [instagram, setInstagram] = useState<Instagram>({
    user: '@nathanf',
    followers: 11,
    followersPerDay: 144,
    likes: 5462,
    profileViews: 52
  });

  const [youtube, setYoutube] = useState<Youtube>({
    user: '@nathanf',
    subscribers: 8239,
    subscribersPerDay: 144,
    likes: 107,
    totalViews: 1407
  });

  return (
    <Container>
        <Card>
          <CardHeader>
            <img src={facebookImg} alt="facebook icon" />
            <p>{facebook.user}</p>
          </CardHeader>
          <CardBody>
            <h2>{facebook.followers}</h2>
            <p>followers</p>
          </CardBody>
          <CardFooter>
            <img src={iconUpImg} alt="followers per day" />
            <span>{`${facebook.followersPerDay} Today`}</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src={twitterImg} alt="facebook icon" />
            <p>{twitter.user}</p>
          </CardHeader>
          <CardBody>
            <h2>{twitter.followers}</h2>
            <p>followers</p>
          </CardBody>
          <CardFooter>
            <img src={iconUpImg} alt="followers per day" />
            <span>{`${twitter.followersPerDay} Today`}</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src={instagramImg} alt="facebook icon" />
            <p>{instagram.user}</p>
          </CardHeader>
          <CardBody>
            <h2>{`${instagram.followers}K`}</h2>
            <p>followers</p>
          </CardBody>
          <CardFooter>
            <img src={iconUpImg} alt="followers per day" />
            <span>{`${instagram.followersPerDay} Today`}</span>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <img src={youtubeImg} alt="facebook icon" />
            <p>{youtube.user}</p>
          </CardHeader>
          <CardBody>
            <h2>{youtube.subscribers}</h2>
            <p>followers</p>
          </CardBody>
          <CardFooter>
            <img src={iconDownImg} alt="followers per day" />
            <span className="down">{`${youtube.subscribersPerDay} Today`}</span>
          </CardFooter>
        </Card>
    </Container>
  );
}