const Boxes = () => {
  return (
    <>
      <div className="UpToDate">
        <p id="section1_p">Stay up to date</p>
        <p id="callGuide">
          Get the latest from WhatsApp: news, useful tips, and our newest
          features to help you stay connected.
        </p>
      </div>

      <div className="boxes">
        <Box
          heading={"New year, new ways to chat on WhatsApp"}
          text={
            "We're always working on making WhatsApp easier to use and more fun, so we’re excited to kick off the new year with a variety of new features and design improvements."
          }
          link={
            "https://blog.whatsapp.com/new-year-new-ways-to-chat-on-whatsapp"
          }
        />
        <Box
          heading={"Improved calling on WhatsApp this holiday season"}
          text={
            "Calling on WhatsApp continues to grow in popularity around the world. Now, over 2 billion calls are made on WhatsApp every single day. Ahead of the holiday season, we’re introducing new calling..."
          }
          link={
            "https://blog.whatsapp.com/improved-calling-this-holiday-season"
          }
        />
        <Box
          heading={"Introducing Voice Message Transcripts"}
          text={
            "Sending a voice message makes connecting with friends and family even more personal. There’s something special about hearing your loved one’s voice even when you’re far away. Though sometimes, you’re..."
          }
          link={
            "https://blog.whatsapp.com/introducing-voice-message-transcripts"
          }
        />
        <Box
          heading={"Focus on What Matters With Custom Lists"}
          text={
            "Earlier this year we introduced chat filters as a way to find messages faster. We’ve had great feedback that they help you keep track of your chats, and we’re excited to have quickly evolved them..."
          }
          link={
            "https://blog.whatsapp.com/focus-on-what-matters-with-custom-lists"
          }
        />
        <Box
          heading={"Making it Easier to Add and Manage Contacts"}
          text={
            "What’s more important than sending a message? It’s the person you’re sending it to, of course. Today we’re making it easier to privately add and manage your contacts on WhatsApp, from any device you..."
          }
          link={
            "https://blog.whatsapp.com/making-it-easier-to-add-and-manage-contacts"
          }
        />
      </div>
    </>
  );
};

export default Boxes;

const Box = ({ text, heading, link }) => {
  return (
    <div className="box">
      <div className="icon">
        <i class="fa-brands fa-whatsapp"></i>
      </div>
      <div className="guide">
        <div className="heading">{heading}</div>
        <div className="para">{text}</div>
      </div>
      <button className="link">
        <a href={link}>Read More</a>
      </button>
    </div>
  );
};
