class SSOConfig(BaseSettings):
    SSO_ENABLED: bool = Field(
        description="Enable or disable SSO",
        default=False,
    )
    SSO_PROVIDER: str = Field(
        description="SSO provider (e.g., 'google', 'okta', 'azure')",
        default=None,
    )
    SSO_CLIENT_ID: str = Field(
        description="SSO client ID",
        default=None,
    )
    SSO_CLIENT_SECRET: str = Field(
        description="SSO client secret",
        default=None,
    )
    SSO_REDIRECT_URI: str = Field(
        description="SSO redirect URI",
        default=None,
    )