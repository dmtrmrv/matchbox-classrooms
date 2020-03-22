# Matchbox Virtual Media Classrooms

This tool is designed to quickly and efficiently spin up classrooms with video and chat.

## User Manual

Under the hood this tool uses [Gatsby](https://www.gatsbyjs.org/) for generating classroom pages, [Vimeo](https://vimeo.com/) for hosting videos, and [RumbleTalk](https://www.rumbletalk.com/) for hosting chat rooms.

## Local Development

For local development, make yourself familiar with workign with Gastby by reading this [guide](https://www.gatsbyjs.org/docs/quick-start/).

## Adding New Classrooms

Platform will generate a classroom page for every markdown file that is added to `src/classrooms` folder.

```
src
├── classrooms
│   ├── classroom-01.md
│   ├── classroom-02.md
│   └── custom-name.md
```

Each file has to have the following structure:

```markdown
---
path: "/classrooms/dbPtHp3qa3zwzweyD5Gn"
title: "Classroom Title"
vimeoID: "XXXXXXXXX"
rtRoomID: "rt-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
rtClientID: "XXXXXXXX"
---
```

## `path`

Part of the URL where the classroom is hosted. If your site URL is `https://example.com`, given the code sample above the classroom will be hosted at `https://example.com/classrooms/dbPtHp3qa3zwzweyD5Gn`. I recommend generating URLs using sites like [random.org](https://www.random.org/strings/).

## `title`

Name of the classroom used in the browser tab.

## `vimeoID`

ID of the video that can be found in the URL.

![ID of the video on vimeo](https://github.com/dmtrmrv/matchbox-classrooms/blob/master/manual/vimeo.png?raw=true)

## `rtRoomID` and `rtClientID`

IDs that can be found in the RumbleTalk embed code.

![RumbleTalk IDs](https://github.com/dmtrmrv/matchbox-classrooms/blob/master/manual/rumbletalk-ids.png?raw=true)
