import {formatDistanceToNow} from 'date-fns'
import React from 'react'
import ReactPlayer from 'react-player'

import {
  VideoBgContainer,
  VideoSubBgContainer,
  Logo,
  TitleBgContainer,
  VideoTitle,
  BottomNames,
  LikesBgContainer,
  Line,
  VideoPlayer,
} from './StyledComponents'

const VideoCardDetails = props => {
  const {eachVideoDetails} = props
  const {
    id,
    videoUrl,
    title,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = eachVideoDetails

  const PublishedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <VideoBgContainer>
      <VideoPlayer>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </VideoPlayer>
      <VideoTitle>{title}</VideoTitle>
      <LikesBgContainer>
        <VideoSubBgContainer>
          <BottomNames>{viewCount}</BottomNames>
          <BottomNames>{PublishedDate}</BottomNames>
        </VideoSubBgContainer>
        <VideoSubBgContainer>
          <BottomNames>{viewCount}</BottomNames>
          <BottomNames>{PublishedDate}</BottomNames>
        </VideoSubBgContainer>
      </LikesBgContainer>
      <Line />
      <VideoSubBgContainer>
        <Logo src={profileImageUrl} alt={name} />
        <TitleBgContainer>
          <VideoTitle>{name}</VideoTitle>
          <BottomNames>{subscriberCount} Subscribers</BottomNames>
        </TitleBgContainer>
      </VideoSubBgContainer>
      <BottomNames>{description}</BottomNames>
    </VideoBgContainer>
  )
}

export default VideoCardDetails
