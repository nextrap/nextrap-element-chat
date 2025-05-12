# nextrap-element-chat

## Usage

To use the `NxaChatbox` component, import it in your HTML file:

```html
<script type="module">
  import "./dist/chat/nxa-chatbox.js";
  import "./dist/chat/nxa-chatmessage.js";
</script>

<style>
  .my-test-chat {
    font-family: sans-serif;
    --nxa-chat-message-indicator: #ff6107;
    height: 800px;
  }
</style>

<nxa-chatbox class="my-test-chat" data-date-indicator-format="dd'.' MMMM yyyy">
  <div slot="header"><h2>Chat Example</h2></div>
  <div slot="footer">This is a demo chat</div>
  <div slot="input">
    <div class="message-input-wrapper">
      <input
        type="text"
        class="message-input"
        id="messageInput"
        placeholder="Type a message..."
      />
      <button class="send-button" onclick="sendMessage()">Send</button>
    </div>
  </div>
  <!-- messages -->

  <!-- Example for other -->
  <nxa-chat-message data-type="other" data-date="2025-03-07T09:58:45.184Z">
    <span slot="sender">John Doe</span>
    <span slot="time">Received at 2025-03-07 09:58</span>
    <p slot="content">Hi there! How are you doing today?</p>
    <button slot="control" title="Reply">↩</button>
    <button slot="control" title="More">⋯</button>
  </nxa-chat-message>

  <!-- Example for me, highlighted -->
  <nxa-chat-message
    data-type="me"
    class="highlight"
    data-date="2025-03-07T07:58:45.184Z"
  >
    <span slot="sender">You</span>
    <span slot="time">Sent at 2025-03-07 07:58</span>
    <p slot="content">I'm doing great, thanks for asking!</p>
    <button slot="control" title="Edit">✎</button>
    <button slot="control" title="More">⋯</button>
    <div slot="footer">
      <div class="message-status">✓ Seen</div>
      <div class="message-reactions">👍 2</div>
    </div>
  </nxa-chat-message>
</nxa-chatbox>
```

## Credits

- Icons used in the chat components are from [heroicons.com](https://heroicons.com)
