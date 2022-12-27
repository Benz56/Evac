const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'SERVER_NAME': JSON.stringify(process.env.SERVER_NAME)
            }
        })
    ]
};
