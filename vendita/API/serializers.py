from rest_framework import serializers
from API.models import Lead


# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

    def create(self, validated_data):
        return Lead.objects.create(**validated_data)