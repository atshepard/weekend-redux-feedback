# Feedback Form

This feedback form is designed to create a space for daily self-reflection. 

 ![](/public/images/reflectionapp.png)

 You may notice a subtle color transformation in the background: this was a design choice to emulate a 15 second breathing pattern I often use while reflecting. 

## Description

#### Material UI
This app relies on Material UI, in addition to CSS, for aesthetics. This was my first time using a theme and styled components like sliders. I was generally pleased with how seamlessly they integrated into my vision:

![](/public/images/muiSlider.png)

#### Redux
This app relies heavily on redux, which stores the response from each page in its state, then dispatches that state via axios when the reflection is submitted. Redux has been a lifesaver as an intermediary between the client and server as an alternative to passing information on props in order to access information in a particular component.

![](/public/images/redux.png)
