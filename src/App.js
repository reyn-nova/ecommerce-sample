import React from 'react'

const options = [
  {
    id: 0,
    text: 'Option 1'
  },
  {
    id: 1,
    text: 'Option 2'
  }
]

const products = [
  {
    id: 0,
    imageURL: 'https://images.unsplash.com/photo-1583183634411-47514a69722c?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    name: 'Product 1'
  },
  {
    id: 1,
    imageURL: 'https://images.unsplash.com/photo-1588413335672-87b35888b55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Product 2'
  },
  {
    id: 2,
    imageURL: 'https://images.unsplash.com/photo-1548329408-0bcd6e68058d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    name: 'Product 3'
  }
]

const socialMediaOptions = [
  {
    id: 0,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1021px-WhatsApp.svg.png',
    name: 'WhatsApp',
    URL: 'https://whatsapp.com'
  },
  {
    id: 1,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png',
    name: 'Instagram',
    URL: 'https://instagram.com'
  },
  {
    id: 2,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    name: 'Facebook',
    URL: 'https://facebook.com'
  },
  {
    id: 3,
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png',
    name: 'Telegram',
    URL: 'https://telegram.com'
  }
]

export default class extends React.Component {
  render() {
    return (
      <div
        className = 'container'
      >
        <div
          className = 'top-navigation'
        >
          <p
            className = 'top-navigation-title'
          >
            Ecommerce Sample
          </p>

          <div
            className = 'top-navigation-options-container'
          >
            {
              options.map((item, index) => {
                return (
                  <a
                    className = 'top-navigation-option'
                    href = '/#'
                    key = {item.id}
                    style = {{
                      marginLeft: index === 0 ? 0 : 20
                    }}
                  >
                    {item.text}
                  </a>
                )
              })
            }
          </div>
        </div>

        <div
          className = 'hello-panel'
        >
          <img
            alt = 'hello-panel-background'
            className = 'hello-panel-background-image'
            src = 'https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
          />

          <div
            className = 'hello-front-panel'
          >
            <p
              className = 'hello-text'
            >
              Hello There!
            </p>

            <div
              className = 'input-container'
            >
              <input
                className = 'main-input'
                placeholder = 'Start search something...'
              />

              <a
                className = 'main-input-go'
                href = '/#'
              >
                Go
              </a>
            </div>
          </div>
        </div>

        <div
          className = 'products-container'
        >
          <p
            className = 'products-title'
          >
            Our Products
          </p>

          <div
            className = 'product-list-container'
          >
            {
              products.map(item => {
                return (
                  <a
                    className = 'product-container'
                    href = '/#'
                    key = {item.id}
                  >
                    <img
                      alt = {`item-${item.id}`}
                      className = 'product-image'
                      src = {item.imageURL}
                    />

                    <p
                      className = 'product-name'
                    >
                      {item.name}
                    </p>
                  </a>
                )
              })
            }
          </div>
        </div>

        <div
          className = 'contact-us-panel'
        >
          <p
            className = 'contact-us-title'
          >
            Get In Touch With Us...
          </p>

          <div
            className = 'contact-us-options'
          >
            {
              socialMediaOptions.map(item => {
                return (
                  <a
                    className = 'contact-us-option'
                    href = {item.URL}
                    key = {item.id}
                    rel = 'noopener noreferrer'
                    target = '_blank'
                  >
                    <img
                      alt = {item.name + ' logo'}
                      src = {item.imageURL}
                      style = {{
                        height: 40,
                        objectFit: 'contain',
                        width: 40
                      }}
                    />
                  
                    <p
                      style = {{
                        marginTop: 10
                      }}
                    >
                      {item.name}
                    </p>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}