//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')


//SIDEBAR

//Remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      // document.querySelector('#notifications .notification-count').style.display = 'none';

    }
  })
})


//MESSAGES
// searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  // console.log(val);
  message.forEach(chat => {
    // console.log(chat.querySelector('h5').textContent.toLowerCase());
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display = 'none';
    }
  })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//Highlights message card when message is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotification.querySelector('.notification-count').style.display = 'none';
  // setTimeout(() => {
  //   messages.style.boxShadow = 'none';
  // }, 2000)
})

// Theme / Display Customization

// Open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}

// Close modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}

// Close modal
themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);


// Fonts

//Remove active class from span or font size selectors
const removeSizeSelectors = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {

  size.addEventListener('click', () => {
    removeSizeSelectors()
    let fontSize;
    size.classList.toggle('active')


    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px'
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px'
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px'
      root.style.setProperty('----sticky-top-left', '-12rem')
      root.style.setProperty('----sticky-top-right', '-35rem')
    }
    // Change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
  })
})

// Remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}

// Change Primary colors
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    color.addEventListener('click', () => {
      let primaryHue;

      //Remove active class from colors
      changeActiveColorClass()

      if (color.classList.contains('color-1')) {
        primaryHue = 252;
      } else if (color.classList.contains('color-2')) {
        primaryHue = 52;
      } else if (color.classList.contains('color-3')) {
        primaryHue = 352;
      } else if (color.classList.contains('color-4')) {
        primaryHue = 152;
      } else if (color.classList.contains('color-5')) {
        primaryHue = 202;
      }

      color.classList.add('active')
      root.style.setProperty('--primary-color-hue', primaryHue)
    })
  })
})

//Theme Background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change Background Color
const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
  darkColorLightness = '17%';
  whiteColorLightness = '100%';
  lightColorLightness = '97%';

  //Add active class
  Bg1.classList.add('active')
  //Remove active class from others
  Bg2.classList.remove('active')
  Bg3.classList.remove('active')
  //Remove customized changes from local storage
  changeBg()
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //Add active class
  Bg2.classList.add('active')
  //Remove active class from others
  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBg()
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //Add active class
  Bg3.classList.add('active')
  //Remove active class from others
  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBg()
})