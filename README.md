# Web Development Project 2 - *Japanese Flashcards*

Submitted by: **Shi Wei Zheng**

This web app: **This app contains flashcards of some Japanese phrases/words that can come in handy when learning and speaking the language.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [X] **A single card at a time is displayed, only showing one of the components of the information pair**
- [X] **A list of card pairs is created**
- [X] **Clicking on the card shows the corresponding component of the information pair**
- [X] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/Walkthrough.gif' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ShareX  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- One challenge I faced was trying to figure how to start the project. I had no idea where to begin. In order to understand what I have to do, I started to break things down to see what kind of components will be needed and where they need to be placed.
- The main challenge I encountered was trying to change to the next card. I have useState set up to change to the next index of the array with the data. However, when trying to change to a random card, the data either didn't change since the state of the variable didn't change or it only change after I flip the card. To fix this problem, I decided to use useEffect to check for the changes. This way, the data will sync when changing to the next card.

## License

    Copyright [2023] [Shi Wei Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.