module.exports = {
  webpack: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  env: {
    STRIPE_PUBLIC_KEY:
      "pk_test_51OCmkMFygxkkxeiesAEOPON5BiaXqhJHfOakKimiuNLNU9LdgVuHQCOTHbnWoZMq77mJ9XtixnLeLboBLLiYL6lk00NuelWCzH",
  },
};
