export default function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <h2> user Settings</h2>
        <div className="settings-section">
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
            />
            <label htmlFor="phone number">Phone Number:</label>
            <input type="text" id="phone number" name="phone number" />
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
}
