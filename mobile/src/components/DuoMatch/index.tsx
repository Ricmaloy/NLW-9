import React, { useState } from 'react';
import {
  Modal,
  ModalProps,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { Heading } from '../Heading';
import { styles } from './styles';
import { THEME } from '../../theme';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopyingDiscordUser, setIsCopyingDiscordUser] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopyingDiscordUser(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      'Discord copiado!',
      'Usuário copiado para você encontrar essa pessoa no Discord 🎮'
    );
    setIsCopyingDiscordUser(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            onPress={handleCopyDiscordUserToClipboard}
            style={styles.discordButton}
            disabled={isCopyingDiscordUser}
          >
            <Text style={styles.discord}>
              {isCopyingDiscordUser ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
